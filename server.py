from flask import Flask, abort, render_template
from music21 import *
from random import randint

app = Flask(__name__)

def abort400WithMessage(msg):
    print(f'ERROR: {msg}')
    abort(400, msg)

@app.route("/")
def index():
    return render_template('index.html')

@app.route('/section.xml')
def section():
    xmlFile = 'static/MozaVeilSample.xml' # Make this a user controlled variable
    NUM_MEASURES = 2 # Make this a user controlled variable (?)

    score = converter.parse(xmlFile)

    parts = score.getElementsByClass(stream.Part)
    if len(parts) < 1:
        abort400WithMessage('Not enough voices in score')

    measures = parts[0].getElementsByClass(stream.Measure)
    if len(measures) < NUM_MEASURES:
        abort400WithMessage('Not enough measures in voice')
    
    begin = randint(0, len(measures) - NUM_MEASURES)
    end = begin + NUM_MEASURES - 1

    GEX = musicxml.m21ToXml.GeneralObjectExporter(score.measures(begin, end))
    return GEX.parse()

if __name__ == '__main__':
    app.run()
