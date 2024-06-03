import { isFilled } from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
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
      className="new-section-test-by-lara"
    >
      Placeholder component for testing_slice (variation: {slice.variation})
      Slices
      {isFilled.richText(slice.primary.Heading) && (
        <div className="es-fullpage-hero__content__intro__headline">
          <PrismicRichText field={slice.primary.Heading} />
        </div>
      )}
    </section>
  );
};

export default TestingSlice;
