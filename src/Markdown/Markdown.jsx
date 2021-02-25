import MarkdownBase from "react-markdown";
import htmlParser from "react-markdown/plugins/html-parser";
import directive from "remark-directive";
import visit from "unist-util-visit";
import h from "hastscript";

import WidgetRenderer from "./renderers/WidgetRenderer";

const parseHtml = htmlParser({
  isValidNode: (node) => {
    return ["tag", "text"].includes(node.type);
  },
});

const renderers = {
  textDirective: WidgetRenderer,
  leafDirective: WidgetRenderer,
  containerDirective: WidgetRenderer,
};

function widgetDirective() {
  return transform;

  function transform(tree) {
    visit(
      tree,
      ["textDirective", "leafDirective", "containerDirective"],
      ondirective
    );
  }

  function ondirective(node) {
    var data = node.data || (node.data = {});
    var hast = h(node.name, node.attributes);

    data.hName = hast.tagName;
    data.hProperties = hast.properties;
  }
}

const Markdown = (props) => {
  return (
    <div className="markdown">
      <MarkdownBase
        escapeHtml={false}
        astPlugins={[parseHtml]}
        plugins={[directive, widgetDirective]}
        renderers={renderers}
        {...props}
      />
    </div>
  );
};

export default Markdown;
