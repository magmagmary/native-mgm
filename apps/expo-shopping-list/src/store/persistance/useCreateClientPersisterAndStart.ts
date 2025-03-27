import * as UiReact from "tinybase/ui-react/with-schemas";
import type {
	Content,
	MergeableStore,
	OptionalSchemas,
} from "tinybase/with-schemas";
import { createClientPersister } from "./createClientPersister";

export const useCreateClientPersisterAndStart = <
	Schemas extends OptionalSchemas,
>(
	storeId: string,
	store: MergeableStore<Schemas>,
	initialValues?: string,
	then?: () => void,
) =>
	(UiReact as UiReact.WithSchemas<Schemas>).useCreatePersister(
		store,
		(store) => createClientPersister(storeId, store as MergeableStore<Schemas>),
		[storeId],
		async (persister) => {
			// Determine if there is initial content for a newly-created store.
			let initialContent: Content<Schemas> | undefined = undefined;
			try {
				initialContent = [{}, JSON.parse(initialValues as string)];
			} catch {
				// Ignore
			}

			// Start the persistence.
			await persister.load(initialContent);
			await persister.startAutoSave();
			then?.();
		},
		[initialValues],
	);
