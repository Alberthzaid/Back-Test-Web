export class Brand {
    constructor( name, reference) {
        this.name = name;
        this.reference = reference;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getReference() {
        return this.reference;
    }

    toJson() {
        return {
            nombre: this.name,
            referencia: this.reference
        };
    }
}
