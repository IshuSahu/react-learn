/*
https://react-hook-form.com/get-started#IntegratingControlledInputs
*/
import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';

/**
 * Rich Text Editor (RTE) component using TinyMCE and react-hook-form
 */
export default function RTE({ name, control, label, defaultValue = "" }) {
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

            <Controller
                name={name || "content"}
                control={control}
                defaultValue={defaultValue} // Ensure defaultValue is passed to Controller
                render={({ field: { onChange, value } }) => (
                    <Editor
                        value={value} // Bind the editor's value to the form state
                        init={{
                            height: 500,
                            menubar: true,
                            plugins: [
                                "advlist", "autolink", "lists", "link", "image", "charmap", 
                                "preview", "anchor", "searchreplace", "visualblocks", 
                                "code", "fullscreen", "insertdatetime", "media", 
                                "table", "help", "wordcount"
                            ],
                            toolbar: "undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                        }}
                        onEditorChange={onChange} // Use onChange to update the form state
                    />
                )}
            />
        </div>
    );
}
