import React from "react";
import styles from "../CardInstruccion/CardInstruccion.module.scss"

const CardPostCreate = () => {
    return (
        <>
            <aside className="aside-right detail-aside p-0 ps-md-5 ps-lg-0">
                <div className="help-post-title d-none">
                    <div className={styles.helpPost}>
                        <h4 className="mb-2 fs-l">Writing a Great Post Title</h4>
                        <ul className="list-disc pl-6 color-base-70">
                            <li>Think of your post title as a super short (but compelling!) description — like an overview of the actual post in one short sentence.</li>
                            <li>Use keywords where appropriate to help ensure people can find your post by search.</li>
                        </ul>
                    </div>
                </div>
                <div className={`${styles.helpPostTags} d-none `}>
                    <div className="help-post">
                        <h4>Tagging Guidelines</h4>
                        <ul>
                            <li>Tags help people find your post.</li>
                            <li>Think of tags as the topics or categories that best describe your post.</li>
                            <li>Add up to four comma-separated tags per post. Combine tags to reach the appropriate subcommunities.</li>
                            <li>Use existing tags whenever possible.</li>
                            <li>Some tags, such as “help” or “healthydebate”, have special posting guidelines.</li>
                        </ul>
                    </div>
                </div>
            </aside>
        </>
    )
}
export default CardPostCreate