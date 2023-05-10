import {makeAutoObservable} from 'mobx'; 

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Телевизоры'},
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Asus'},
            {id: 4, name: 'Lenovo'},
            {id: 5, name: 'Meizu'},
            {id: 6, name: 'Nokia'},
            {id: 7, name: 'Sony'},
        ]
        this._devices = [
            {id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/1f/3b/32/20069151/3756-1/tsp20230417170657/Apple-iPhone-14-Pro-6-1-5G-Double-SIM-128-Go-Violet-intense.jpg'},
            {id: 2, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/1f/3b/32/20069151/3756-1/tsp20230417170657/Apple-iPhone-14-Pro-6-1-5G-Double-SIM-128-Go-Violet-intense.jpg'},
            {id: 3, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/1f/3b/32/20069151/3756-1/tsp20230417170657/Apple-iPhone-14-Pro-6-1-5G-Double-SIM-128-Go-Violet-intense.jpg'},
            {id: 4, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/1f/3b/32/20069151/3756-1/tsp20230417170657/Apple-iPhone-14-Pro-6-1-5G-Double-SIM-128-Go-Violet-intense.jpg'},
            {id: 5, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/1f/3b/32/20069151/3756-1/tsp20230417170657/Apple-iPhone-14-Pro-6-1-5G-Double-SIM-128-Go-Violet-intense.jpg'},
            {id: 6, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/1f/3b/32/20069151/3756-1/tsp20230417170657/Apple-iPhone-14-Pro-6-1-5G-Double-SIM-128-Go-Violet-intense.jpg'},
            {id: 7, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/1f/3b/32/20069151/3756-1/tsp20230417170657/Apple-iPhone-14-Pro-6-1-5G-Double-SIM-128-Go-Violet-intense.jpg'},
            {id: 8, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/1f/3b/32/20069151/3756-1/tsp20230417170657/Apple-iPhone-14-Pro-6-1-5G-Double-SIM-128-Go-Violet-intense.jpg'},
            {id: 9, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/1f/3b/32/20069151/3756-1/tsp20230417170657/Apple-iPhone-14-Pro-6-1-5G-Double-SIM-128-Go-Violet-intense.jpg'},
            {id: 10, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/1f/3b/32/20069151/3756-1/tsp20230417170657/Apple-iPhone-14-Pro-6-1-5G-Double-SIM-128-Go-Violet-intense.jpg'},
            {id: 11, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/1f/3b/32/20069151/3756-1/tsp20230417170657/Apple-iPhone-14-Pro-6-1-5G-Double-SIM-128-Go-Violet-intense.jpg'},
            {id: 12, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/1f/3b/32/20069151/3756-1/tsp20230417170657/Apple-iPhone-14-Pro-6-1-5G-Double-SIM-128-Go-Violet-intense.jpg'},
            {id: 13, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/1f/3b/32/20069151/3756-1/tsp20230417170657/Apple-iPhone-14-Pro-6-1-5G-Double-SIM-128-Go-Violet-intense.jpg'},
            {id: 14, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/1f/3b/32/20069151/3756-1/tsp20230417170657/Apple-iPhone-14-Pro-6-1-5G-Double-SIM-128-Go-Violet-intense.jpg'},
            {id: 15, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/1f/3b/32/20069151/3756-1/tsp20230417170657/Apple-iPhone-14-Pro-6-1-5G-Double-SIM-128-Go-Violet-intense.jpg'},
            {id: 16, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/1f/3b/32/20069151/3756-1/tsp20230417170657/Apple-iPhone-14-Pro-6-1-5G-Double-SIM-128-Go-Violet-intense.jpg'},
            
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}