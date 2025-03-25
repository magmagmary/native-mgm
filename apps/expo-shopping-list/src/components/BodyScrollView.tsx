import { forwardRef } from 'react';
import { ScrollView, type ScrollViewProps } from 'react-native';

// biome-ignore lint/suspicious/noExplicitAny: any is used to allow for forwardRef
export const BodyScrollView = forwardRef<any, ScrollViewProps>((props, ref) => {
  return (
    <ScrollView
      automaticallyAdjustsScrollIndicatorInsets
      contentInsetAdjustmentBehavior="automatic"
      contentInset={{ bottom: 0 }}
      scrollIndicatorInsets={{ bottom: 0 }}
      {...props}
      ref={ref}
    />
  );
});
