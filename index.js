import uploadAdapterPlugin from './plugins/uploadAdapterPlugin';

import ClassicEditor from "ckeditor5-custom-build";

//import "ckeditor5-custom-build/build/translations/ru";

let artEditor = {
    create(elem, userConfig) {
        userConfig = {
            uploadAdapterPlugin: {
                url: 'http://test.local/upload',
            }
        };
        let baseConfig = {
            language: 'ru',
            link: {
                decorators: {
                    isExternal: {
                        mode: 'automatic',
                        callback: url => !url.includes(window.location.host),
                        attributes: {
                            target: '_blank',
                            rel: 'noopener noreferrer nofollow',
                            class: 'external'
                        }
                    }
                }
            },
            heading: {
                options: [
                    {model: 'paragraph', title: 'Параграф'},
                    {model: 'heading1', view: 'h2', title: 'Заголовок 1'},
                    {model: 'heading2', view: 'h3', title: 'Заголовок 2'}
                ]
            },
            toolbar: {
                items: [
                  /*  'heading',*/
                    'bold',
                    'italic',
                    'link',
                    'bulletedList',
                    'numberedList',
                    '|',
                    'imageUpload',
                    'blockQuote',
                    /*   'undo',
                         'redo',
                         'InsertTable',
                          'indent',
                         'outdent',
                         '|',
                         'horizontalLine',
                         'FontFamily',
                         'FontSize',*/
                ]
            },

            image: {
                toolbar: [
                    'imageTextAlternative'
                ]
            },
            table: {
                contentToolbar: [
                    'tableColumn',
                    'tableRow',
                    'mergeTableCells'
                ]
            },
            licenseKey: '',
            extraPlugins: [uploadAdapterPlugin]
        };

        return ClassicEditor.create(elem, {
            ...baseConfig,
            ...userConfig
        })

    }
}
export default artEditor