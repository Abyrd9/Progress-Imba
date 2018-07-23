export tag Auth
  prop title
  prop subtitle

  def render
    <self.auth>
      <div.auth__header>
        <i.fas .fa-arrow-left .auth__header__back-button :tap.self.changeRoute>
        <h2.auth__header__title> title
        <p.auth__header__subtitle> subtitle
      <form.auth__input-section>
        <label.auth__input-section__input-container> 
          <input.auth__input-section__input-container__input>
          <p.auth__input-section__input-container__placeholder> "Email Address"
        <label.auth__input-section__input-container>
          <input.auth__input-section__input-container__input>
          <p.auth__input-section__input-container__placeholder> "Password"
        <a.auth__input-section__forgot-password-link> "Forgot your password?"
        <button.auth__input-section__submit-button> "Sign in"
      <span.auth__divider>
      <div.auth__social>
        <button.auth__social-button>
          <i.fab .fa-facebook-f .auth__social-button__icon>
          "Facebook"
        <button.auth__social-button>
          <i.fab .fa-google .auth__social-button__icon>
          "Google"
        <p> "Don't have an account?"
          <a> "Sign Up."