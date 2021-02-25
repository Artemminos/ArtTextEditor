import uploadAdapterPlugin from './plugins/uploadAdapterPlugin';

import '@ckeditor/ckeditor5-build-classic/build/translations/ru';
import ClassicEditor from "ckeditor5-custom-build";




let artEditor = {
    create(elem, userConfig) {
        userConfig = {
            uploadAdapterPlugin: {
                url: 'http://test.local/upload',
            }
        };
        let baseConfig = {

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
                    },
                    isDownloadable:{
                        mode:'manual',
                        label:'загрузка',
                        attributes: {
                            download:'file.png'
                        }
                    }
                }
            },
            heading: {
                options: [
                    { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                    { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                    { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
                    { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
                    { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
                    { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
                    { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' }
                ]
            },
            toolbar: {
                items: [
                    'paragraph', 'heading1', 'heading2', 'heading3', 'heading4', 'heading5', 'heading6',
                    'bold',
                    'italic',
                    'link',
                    'bulletedList',
                    'numberedList',
                    '|',
                    'imageUpload',
                    'blockQuote',
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
            extraPlugins: [uploadAdapterPlugin],
            language: 'ru',
        };

        return ClassicEditor.create(elem, {
            ...baseConfig,
            ...userConfig
        })

    }
}
export default artEditor