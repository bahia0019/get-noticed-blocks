/**
 * Block dependencies
 */
import icon from "./icon"
import "./style.scss"
import "./editor.scss"

/**
 * Internal block libraries
 */
const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { RichText } = wp.editor

/**
 * Register block
 */
export default registerBlockType("fsblocks/get-noticed-cta", {
  title: __("Get Noticed CTA", "fsblocks"),
  description: __(
    "Demonstration of how to make a static call to action block.",
    "fsblocks"
  ),
  category: "common",
  icon: {
    background: "rgba(254, 243, 224, 0.52)",
    src: icon
  },
  keywords: [__("CTA", "fsblocks")],
  attributes: {
    ctaTitle: {
      type: "array",
      source: "children",
      selector: "h3"
    },
    ctaBody: {
      type: "array",
      source: "children",
      selector: ".cta-body"
    }
  },
  edit: props => {
    const {
      attributes: { ctaTitle, ctaBody },
      className,
      setAttributes
    } = props
    const onChangeCtaTitle = ctaTitle => {
      setAttributes({ ctaTitle })
    }
    const onChangeCtaBody = ctaBody => {
      setAttributes({ ctaBody })
    }

    return (
      <div className={className}>
        <div class="justify-right">
          <RichText
            tagName="h3"
            placeholder={__("Click to add a CTA Title", "fsblocks")}
            onChange={onChangeCtaTitle}
            value={ctaTitle}
          />
          <RichText
            tagName="div"
            className="cta-body"
            placeholder={__("Click to add CTA text", "fsblocks")}
            onChange={onChangeCtaBody}
            value={ctaBody}
          />
          <a class="cta-button" href="https://flauntsites.com">
            {__("Get Noticed!")}
          </a>
        </div>
      </div>
    )
  },
  save: props => {
    const {
      attributes: { ctaTitle, ctaBody }
    } = props
    return (
      <div>
        <div class="justify-right">
          <h3>{ctaTitle}</h3>
          <div class="message-body">{ctaBody}</div>
          <a class="cta-button" href="https://getnoticed.flauntsites.com">
            Get Noticed!
          </a>
        </div>
      </div>
    )
  }
})
