function store() {
    this.products = [
        new product("CITBIK1", "City Bike 01", "The PR1-RS is an excellent step up from an entry level road bike. It has the performance to match its elegant and modern appearance.", 310),
        new product("CITBIK2", "City Bike 02", "The PR2-RS is an excellent step up from an entry level road bike. It has the performance to match its elegant and modern appearance.", 320),
        new product("CITBIK3", "City Bike 03", "The PR3-RS is an excellent step up from an entry level road bike. It has the performance to match its elegant and modern appearance.", 330),
        new product("RACBIK1", "Race Bike 01", "The ROC is our best ever aluminium road bike. A very modern response to the demands of today’s road cyclists. You could call it a sportive machine but that would be limiting this bike’s capabilities. ", 210),
        new product("RACBIK2", "Race Bike 02", "The ROC is our best ever aluminium road bike. A very modern response to the demands of today’s road cyclists. You could call it a sportive machine but that would be limiting this bike’s capabilities. ", 220),
        new product("RACBIK3", "Race Bike 03", "The ROC is our best ever aluminium road bike. A very modern response to the demands of today’s road cyclists. You could call it a sportive machine but that would be limiting this bike’s capabilities. 3", 230),
        new product("KIDBIK1", "Kid's Bike 01", "has a lightweight aluminium frame and high quality frame and forks, great for the improving or cyclists growing in confidence.", 110),
        new product("KIDBIK2", "Kid's Bike 02", "has a lightweight aluminium frame and high quality frame and forks, great for the improving or cyclists growing in confidence.", 120),
        new product("KIDBIK3", "Kid's Bike 03", "has a lightweight aluminium frame and high quality frame and forks, great for the improving or cyclists growing in confidence.", 130),
    ];

}

store.prototype.getProduct = function (sku) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].sku == sku)
            return this.products[i];
    }
    return null;
}