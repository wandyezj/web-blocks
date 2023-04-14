import { website, clock } from "./website";
clock();
console.log(website());

// Inject Blockly
import Blockly from "blockly";

const toolbox = {
    kind: "flyoutToolbox",
    contents: [
        {
            kind: "block",
            type: "controls_if",
        },
        {
            kind: "block",
            type: "controls_repeat_ext",
        },
        {
            kind: "block",
            type: "logic_compare",
        },
        {
            kind: "block",
            type: "math_number",
        },
        {
            kind: "block",
            type: "math_arithmetic",
        },
        {
            kind: "block",
            type: "text",
        },
        {
            kind: "block",
            type: "text_print",
        },
    ],
};

//const workspace =
Blockly.inject("blocklyDiv", { toolbox });
