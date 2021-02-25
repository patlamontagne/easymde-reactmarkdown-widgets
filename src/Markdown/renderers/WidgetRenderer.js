import React from "react";

const WidgetRenderer = (props) => {
  const widgets = window.widgetData;
  const id = parseInt(props.data.hProperties.id, 10);
  const widget = widgets.find((w) => w.id === id);
  if (widget) return <span dangerouslySetInnerHTML={{ __html: widget.html }} />;

  return (
    <span>
      <strong>[Widget {id} introuvable]</strong>
    </span>
  );
};

export default WidgetRenderer;
