const STORE_ID_PREFIX = "shoppingListsStore-";
import { useUser } from "@clerk/clerk-expo";
import * as UiReact from "tinybase/ui-react/with-schemas";
import {
  createMergeableStore,
  type NoValuesSchema,
} from "tinybase/with-schemas";
import { useCreateClientPersisterAndStart } from "./persistance/useCreateClientPersisterAndStart";
import { useCreateServerSynchronizerAndStart } from "./synchronization/useCreateServerSynchronizerAndStart";
import ShoppingListStore from "./ShoppingListStore";
import { useCallback } from "react";
import { randomUUID } from "expo-crypto";

const TABLES_SCHEMA = {
  lists: {
    id: { type: "string" },
    initialContentJson: { type: "string" },
  },
} as const;

const {
  useCell,
  useCreateMergeableStore,
  useDelRowCallback,
  useProvideStore,
  useRowIds,
  useSetCellCallback,
  useSortedRowIds,
  useStore,
  useTable,
} = UiReact as UiReact.WithSchemas<[typeof TABLES_SCHEMA, NoValuesSchema]>;

const useStoreId = () => {
  const user = useUser().user;
  return STORE_ID_PREFIX + (user?.id ?? "defaultUserId");
};

// Returns a callback that adds a new shopping list to the store.
export const useAddShoppingListCallback = () => {
  const store = useStore(useStoreId());

  if (store === undefined) return () => {};

  return useCallback(
    ({
      name,
      description,
      emoji,
      color,
    }: {
      name: string;
      description: string;
      emoji: string;
      color: string;
    }) => {
      const listId = randomUUID();

      store.setRow("lists", listId, {
        id: listId,
        initialContentJson: JSON.stringify({
          id: listId,
          name,
          description,
          emoji,
          color,
          crearedAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }),
      });

      return listId;
    },
    [store],
  );
};

export default function ShoppingListsStore() {
  const storeId = useStoreId();
  const store = useCreateMergeableStore(() =>
    createMergeableStore().setTablesSchema(TABLES_SCHEMA),
  );
  useCreateClientPersisterAndStart(storeId, store);
  useCreateServerSynchronizerAndStart(storeId, store);
  useProvideStore(storeId, store);

  return Object.entries(useTable("lists", storeId)).map(
    ([listId, { initialContentJson }]) => (
      <ShoppingListStore
        listId={listId}
        initialContetnJson={initialContentJson ?? ""}
        key={listId}
      />
    ),
  );
}
