
class Command {

    constructor(name, validLength,  validFormat, description, run) {
        this.name = name
        this.validLength = validLength
        this.validFormat = validFormat
        this.description = description
        this.run = run
    }
}

export default Command