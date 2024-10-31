export class Product {
    constructor(id, name, unitMeasurement, observations, brand, stockQuantity, shipmentDate) {
        this.id = id;
        this.name = name;
        this.unitMeasurement = unitMeasurement; 
        this.observations = observations;
        this.brand = brand; 
        this.stockQuantity = stockQuantity;
        this.shipmentDate = shipmentDate;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getUnitMeasurement() {
        return this.unitMeasurement;
    }

    getObservations() {
        return this.observations;
    }

    getBrand() {
        return this.brand;
    }

    getStockQuantity() {
        return this.stockQuantity;
    }

    getShipmentDate() {
        return this.shipmentDate;
    }

    toJson() {
        return {
            id: this.id,
            product_name: this.name,
            unit_measurement: this.unitMeasurement.getUnit(),
            observations: this.observations,
            brand: this.brand.getName(),
            stock_quantity: this.stockQuantity,
            shipment_date: this.shipmentDate
        };
    }
}
