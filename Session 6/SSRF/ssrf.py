from urllib.request import urlopen

from flask import Flask, request

app = Flask(__name__)


@app.route("/")
def root():
    url = request.args.get("url")
    if url:
        return urlopen(url).read().decode()

    return "Try adding a url= parameter"
