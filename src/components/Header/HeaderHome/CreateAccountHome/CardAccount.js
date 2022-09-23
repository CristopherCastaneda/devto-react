import React from "react"

const CardAccount = () => {
    return (
        <div className="block-login col-12 col-md-11 col-lg-8">
            <div className="registration__actions-email">
                <form className="new_user" action="">
                    <div className="crayons-field mb-3">
                        <label className="crayons-field__label" for="user_name">Name</label>
                        <input className="crayons-textfield" type="text" name="name" id="name-user" autocomplete="name" placeholder="Full Name" />
                    </div>
                    <div className="crayons-field mb-3">
                        <label className="crayons-field__label" for="user_location">Location</label>
                        <input className="crayons-textfield" type="text" id="location-user" placeholder="County.." />
                    </div>
                    <div className="crayons-field mb-3">
                        <label className="crayons-field__label" for="user_education">Education</label>
                        <input className="crayons-textfield" type="text" id="education-user" placeholder="Primary, bachor, University" />
                    </div>
                    <div className="crayons-field mb-3">
                        <label className="crayons-field__label" for="user_mail">Email</label>
                        <input autocomplete="email" className="crayons-textfield" type="email" id="email-user" name="email" placeholder="123456@gmail.com" />
                    </div>
                    <div className="crayons-field mb-3">
                        <label className="crayons-field__label" for="user_password">Password</label>
                        <input autocomplete="current-password" className="crayons-textfield" id="password-user" type="password" />
                    </div>
                    <div className="crayons-field mb-3">
                        <label className="crayons-field__label" for="user_description">Description for you</label>
                        <input className="crayons-textfield" id="description-user" type="text" />
                    </div>
                    <div className="crayons-field mb-3">
                        <label className="crayons-field__label" for="user_photo">Profile photo</label>
                        <input id="btn-add-photo" type="file" accept="image/*" className="d-none" data-max-file-size-mb="25" />
                        <div className="image-preview-container me-2" style="max-width: 40px;">
                            <img src="" id="preview-image" alt="" className="img-responsive img-cover-preview rounded-circle" />
                        </div>
                        <label className="btn btn-cover-post">Add a profile photo
                        </label>
                        <input id="btn-add-photo" type="file" accept="image/*" className="d-none" data-max-file-size-mb="25" />
                    </div>
                    <div className="crayons-field crayons-field--checkbox inline-flex flex-row items-center">
                        <input className="crayons-checkbox" type="checkbox" value="1" checked="checked" />
                        <label className="crayons-field__label fw-normal" for="">
                            Remember me
                        </label>
                    </div>
                    <div className="actions pt-3">
                        <input type="submit" name="commit" value="Continue" id="btn-create" className="crayons-btn crayons-btn--l w-100"
                            data-disable-with="Continue" />
                    </div>
                </form>
                <p className="pt-6 fs-s align-center">
                    I forgot my password
                </p>
            </div>
        </div>

    )
}

export default CardAccount