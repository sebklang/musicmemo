import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";

var osmd = new OpenSheetMusicDisplay("osmdContainer");

osmd.setOptions({
    backend: "svg",
    drawTitle: false
});

osmd.load("section.xml").then(function() {
    osmd.render();
});
