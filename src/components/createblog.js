import React, { useState, useEffect } from "react";
import "../components/blog.css";
import { Editor } from "@tinymce/tinymce-react";
// import entire SDK
import * as S3 from "aws-sdk/clients/s3";

function CreateBlog() {
  const [blogPost, setBlogPost] = useState("<p>Create New Blog post</p>");
  const handleEditorChange = (e) => {
    setBlogPost(e.target.getContent());
    console.log("Content was updated:", blogPost);
  };

  return (
    <div className="App">
      <Editor
        initialValue={blogPost}
        init={{
          height: 500,
          menubar: true,
          plugins: [
            "advlist autolink lists link image",
            "charmap print preview anchor help",
            "searchreplace visualblocks code",
            "insertdatetime media table paste wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic | underline | image code | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help",
          /* without images_upload_url set, Upload tab won't show up*/
          images_upload_url: "https://onomepixs.s3.us-east-2.amazonaws.com",
          /* we override default upload handler to simulate successful upload*/
          images_upload_handler: function (blobInfo, success, failure) {
            const file = blobInfo.blob();
            const filename = file.name;
            const contentType = file.type;
            const bucket = new S3({
              accessKeyId: "AKIA3UZA6DLJHL3ABW6C",
              secretAccessKey: "A8isoIAep0K1qW+lChHwPNVeoymgq/+xygJNwknY",
              //region: 'YOUR-REGION'
            });
            const params = {
              Bucket: "onomepixs",
              Key: filename + "",
              Body: file,
              ACL: "public-read",
              ContentType: contentType,
            };
            setTimeout(function () {
              bucket
                .upload(params, function (err, data) {})
                .promise()
                .then((data) => {
                  success(
                    "https://onomepixs.s3.us-east-2.amazonaws.com" +
                      "/" +
                      filename
                  );
                })
                .catch((error) => {
                  console.log(
                    `blob Info ${file.size} file name ${filename} file type ${file.type}`
                  );
                  failure(
                    `Some thing went wrong.Please check your network or ${error}`
                  );
                });
            }, 5000);
          },
        }}
        onChange={handleEditorChange}
      />
    </div>
  );
}

export default CreateBlog;
