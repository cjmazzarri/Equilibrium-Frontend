import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        commerceId: 1,
        clientId: null,
        clientFirstName: null,
        clientLastName: null,
        clientCurrency: null,
        rateValue: null,
        ratePeriod: null,
        rateType: null,
        rateCapitalization: 0,
        paymentTitle: null,
        paymentAmount: null,
        maintenancePeriod: null
    },
    mutations: {
        clientId(state, clientId){
            state.clientId = clientId;
        },
        clientFirstName(state, clientFirstName){
            state.clientFirstName = clientFirstName;
        },
        clientLastName(state, clientLastName){
            state.clientLastName = clientLastName;
        },
        clientCurrency(state, clientCurrency){
            state.clientCurrency = clientCurrency;
        },
        rateValue(state, rateValue){
            state.rateValue = rateValue;
        },
        ratePeriod(state, ratePeriod){
            state.ratePeriod = ratePeriod;
        },
        rateType(state, rateType){
            state.rateType = rateType;
        },
        rateCapitalization(state, rateCapitalization){
            state.rateCapitalization = rateCapitalization;
        },
        paymentTitle(state, paymentTitle){
            state.paymentTitle = paymentTitle;
        },
        paymentAmount(state, paymentAmount){
            state.paymentAmount = paymentAmount;
        },
        maintenancePeriod(state, maintenancePeriod){
            state.maintenancePeriod = maintenancePeriod;
        },
    },
    getters: {
        clientId: state => {
            return state.clientId;
        },
        clientFirstName: state => {
            return state.clientFirstName;
        },
        clientLastName: state => {
            return state.clientLastName;
        },
        clientCurrency: state => {
            return state.clientCurrency;
        },
        rateValue: state => {
            return state.rateValue;
        },
        ratePeriod: state => {
            return state.ratePeriod;
        },
        rateType: state => {
            return state.rateType;
        },
        rateCapitalization: state => {
            return state.rateCapitalization;
        },
        paymentTitle: state => {
            return state.paymentTitle;
        },
        maintenancePeriod: state => {
            return state.maintenancePeriod;
        },
    }
})
