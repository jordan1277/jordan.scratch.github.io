class ScratchFetch {
    constructor() {
    }
    
    alert() {
        return {
            "name": "alert",
            "blocks": [{
              "opcode": "alert",
                "blocktype": "cap"
                "text": "alert [string]
                "arguments": {
                "string" {
            "type": "string", 
                 "defaultvalue": "hello world"
            }
             }
             }]
        }
    }

    alert ({string}) {
    alert(string)
    }
}

Scratch.extensions.register(new ScratchFetch())
