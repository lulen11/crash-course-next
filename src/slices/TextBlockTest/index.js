/**
 * @typedef {import("@prismicio/client").Content.TextBlockTestSlice} TextBlockTestSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextBlockTestSlice>} TextBlockTestProps
 * @param {TextBlockTestProps}
 */
const TextBlockTest = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for text_block_test (variation: {slice.variation})
      Slices
    </section>
  );
};

export default TextBlockTest;
