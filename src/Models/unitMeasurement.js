export class UnitMeasurement {
    constructor(id, unit) {
        this.id = id;
        this.unit = unit;
    }

    getId() {
        return this.id;
    }

    getUnit() {
        return this.unit;
    }

    toJson() {
        return {
            id: this.id,
            unit: this.unit
        };
    }
}
