
import React from "react";
import { shallow } from "enzyme";
import App from './App';


describe('SortById is rendered properly', () => {
      it('Sort', () => {
       const component= shallow(<App/>)
       const sort = component.find("Sort").exists()
        expect(sort).toBe(true) 
       
      })
});
describe('SortByTitle is rendered properly', () => {
    it('SortByTitle', () => {
     const component= shallow(<App/>)
     const sortbyTitle = component.find("SortbyTitle").exists()
      expect(sortbyTitle).toBe(true) 
     
    })
});
describe('SortByBody is rendered properly', () => {
    it('SortByBody', () => {
     const component= shallow(<App/>)
     const sortbyBody = component.find("SortbyBody").exists()
      expect(sortbyBody).toBe(true) 
     
    })
});
describe('SearchById is rendered properly', () => {
    it('SearchById', () => {
     const component= shallow(<App/>)
     const search = component.find("SearchById").exists()
      expect(search).toBe(true) 
     
    })
});
describe('Home is rendered properly', () => {
    it('Home', () => {
     const component= shallow(<App/>)
     const home = component.find("HomeComponent").exists()
      expect(home).toBe(true) 
     
    })
});
