<form class="ef-ak ce_af ef_af box ref--box" 
method="POST" action="/auth/login?from=/dashboard" tabindex="-1">
    <p class="ce-ah alert danger ce_af ef_af">
        You are already logged in - continue to log in with another account.
    </p>
    <a class="ce-ai button ce_af ef_af" href="/auth/github?from=/dashboard">
        Log in with GitHub
    </a>
    <div class="ce-aj group-head ce_af ef_af">
        <p class="ce-ak small ce_af ef_af">
            or with email
        </p>
    </div>
    <div class="ce-al ce_af ef_af">
        <input class="ce-am ce_af ef_af" type="email" name="email" autocomplete="username" placeholder="Email" required=""/>
        <input class="ce-an ce_af ef_af" type="password" name="password" autocomplete="current-password" placeholder="Password" required=""/>
            <button class="ce-ao button ce_af ef_af" type="submit">
            Log in
        </button>
    </div>
    <p class="ce-ap small ce_af ef_af">Having issues logging in? 
        <a class="ce-aq small link ce_af ef_af" href="https://www.google.com/search?q=clear+cookies" target="_blank">
        Clearing your cookies will resolve it</a>
    </p>
    <footer class="ce-ar ce_af ef_af footer ref--footer">
        <span class="ce-as ce_af ef_af">New here? 
            <a class="ce-at small link ce_af ef_af" href="#sign-up">
                Sign Up
            </a>
        </span>
        <a class="ce-au small link ce_af ef_af" href="#forgot-password">
            Forgot password?
        </a>
    </footer>
    <!--slot0-->
</form>