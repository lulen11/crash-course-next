/**
 * @typedef {import("@prismicio/client").Content.TestingSliceSlice} TestingSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestingSliceSlice>} TestingSliceProps
 * @param {TestingSliceProps}
 */
const TestingSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for testing_slice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default TestingSlice;
