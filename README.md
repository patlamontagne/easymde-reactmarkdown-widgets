## EasyMDE config

```js
new EasyMDE({
    previewRender: function(plainText, preview) {
        setTimeout(function() {
            ReactDOM.unmountComponentAtNode(preview);
            var Component = React.createElement(window.Markdown, { key: elementId, source: plainText });
            ReactDOM.render(Component, preview);
        }, 50);
        
        return preview.innerHTML;
    }
});
```

## EasyMDE editor
```md
:widget[name]{id=1}

:widget{id=2} :widget{id=3}
```

## Widget data sample

To define in `window.widgetData`

```json
 [
    {
        "id": 1,
        "name": "My Image",
        "type": "image",
        "value": "https://place-hold.it/200x200",
        "html": "<img src=\"https://place-hold.it/200x200\" alt=\"My Image\">"
    },
    {
        "id": 2,
        "name": "My PDF",
        "type": "pdf",
        "value": "https://example.com/my-pdf",
        "html": "<a href=\"https://example.com/my-pdf\" target=\"_blank\" rel=\"noopener noreferrer\">My PDF</a>"
    },
    {
        "id": 3,
        "name": "My link",
        "type": "link",
        "value": "https://example.com",
        "html": "<a href=\"https://example.com\" target=\"_blank\" rel=\"noopener noreferrer\">My link</a>"
    }
]
 ```