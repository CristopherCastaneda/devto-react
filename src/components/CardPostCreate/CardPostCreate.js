import React from "react"
import styles from "../CardPostCreate/CardPostCreate.module.scss"

const PostCreate = () => {
    return (
        <>
            <div classNameName="col-12 col-md-11 col-lg-8">
                <div className={styles.postEditor}>
                    <div className={ `${styles.postEditorTitle} container p-3`}>
                        <div className="d-flex align-items-center mb-4">
                            <div className={ `${styles.imagePreviewContainer} me-2`}>
                                <img src="" id="preview-image" alt="" className="img-responsive img-cover-preview" />
                            </div>

                            <label className="btn btn-cover-post">Add a cover image

                            </label>
                            <input id="post-editor-cover" type="file" accept="image/*" className="d-none" data-max-file-size-mb="25"/>
                        </div>
                        <input type="text" className="post-editor-title mb-3" placeholder="New post title here..."/>
                            <input name='tags-manual-suggestions' className="post-tags" placeholder='Add up to 4 tags...'/>
                            </div>
                            <div id="editor-content" className="post-editor-content"></div>
                    </div>
                    <div className="result">

                    </div>
                    <div className="d-flex mt-3 align-items-center">
                        <button type="button" id="editPostBtn" className="btn btn-primary btn-publish-post me-2">Save Changes</button>
                        <button type="button" className="btn btn-header-post me-2"><svg className="crayons-icon c-btn__icon" aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="m12 1 9.5 5.5v11L12 23l-9.5-5.5v-11L12 1zm0 2.311L4.5 7.653v8.694l7.5 4.342 7.5-4.342V7.653L12 3.311zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z">

                            </path>
                        </svg><span className="hidden s:inline"></span></button>
                        <div className="post-options-container">
                            <button type="button" className="btn btn-header-post btn-open-options me-2" id="post-options-btn" title="Post options">

                            </button>
                            <div className="post-options-dropdown p-3 d-none">
                                <h3 className="mb-6">Post options</h3>
                                <div className="crayons-field mb-6">
                                    <label for="canonicalUrl" className="crayons-field__label">Canonical URL</label>
                                    <p className="crayons-field__description">Change meta tag <code>canonical_url</code> if this post was first published elsewhere (like your own blog).</p>
                                    <input type="text" className="form-control" placeholder="https://yoursite.com/post-title" name="canonicalUrl" id="canonicalUrl"/>
                                </div>
                                <div className="crayons-field mb-6">
                                    <label for="series" className="crayons-field__label">Series</label>
                                    <p className="crayons-field__description">Will this post be part of a series? Give the series a unique name. (Series visible once it has multiple posts)</p>
                                    <input type="text" className="form-control" name="series" id="series" placeholder="..."/></div>
                                <button type="button" className="btn btn-primary  mt-3" id="post-options-done-btn" data-content="exit">Done</button>
                            </div>
                        </div>

                    </div>
            </div>
        </>
    )
}

export default PostCreate