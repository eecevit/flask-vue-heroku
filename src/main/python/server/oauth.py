from flask import Flask, render_template, g, redirect, url_for
from flask_cors import CORS
from flask_oidc import OpenIDConnect
from okta import UsersClient

app = Flask(__name__)
CORS(app)

app.config["OIDC_CLIENT_SECRETS"] = "client_secrets.json"
app.config["OIDC_COOKIE_SECURE"] = False
app.config["OIDC_CALLBACK_ROUTE"] = "/oidc/callback"
app.config["OIDC_SCOPES"] = ["openid", "email", "profile"]
app.config["SECRET_KEY"] = "HalloBJKIsTheBest"
oidc = OpenIDConnect(app)
okta_client = UsersClient("https://dev-375036.okta.com",
                          "00MIStcQpRWVq7IcwuSbqT61DGw5piXGatgFcHv6Yo")


@app.before_request
def before_request():
    if oidc.user_loggedin:
        g.user = okta_client.get_user(oidc.user_getfield("sub"))
    else:
        g.user = None


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/dashboard")
@oidc.require_login
def dashboard():
    return render_template("dashboard.html")


@app.route("/login")
@oidc.require_login
def login():
    return redirect(url_for(".dashboard"))


@app.route("/logout")
def logout():
    oidc.logout()
    return redirect(url_for(".index"))


if __name__ == '__main__':
    app.run()
