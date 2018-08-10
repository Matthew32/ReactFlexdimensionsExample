/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';


export default class FixedDimensionsBasics extends Component {
  render() {
    //set by fixed
    return (
      <View>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      </View>

    );
    /*
     <View style={{flex: 1}}>
                  <View style={{flex: 1, backgroundColor: 'powderblue'}} />
                  <View style={{flex: 2, backgroundColor: 'skyblue'}} />
                  <View style={{flex: 3, backgroundColor: 'steelblue'}} />

          </View>

    */
  }
  //set by flex
  render() {
      return (
        <View style={{flex: 1}}>
                         <View style={{flex: 1, backgroundColor: 'powderblue'}} />
                         <View style={{flex: 2, backgroundColor: 'skyblue'}} />
                         <View style={{flex: 3, backgroundColor: 'steelblue'}} />

                 </View>

      );
      /*
       <View style={{flex: 1}}>
                    <View style={{flex: 1, backgroundColor: 'powderblue'}} />
                    <View style={{flex: 2, backgroundColor: 'skyblue'}} />
                    <View style={{flex: 3, backgroundColor: 'steelblue'}} />

            </View>

      */
    }
    //flex direction - by row
    render() {
        return (
          // Try setting `flexDirection` to `column`.
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
          </View>
        );
      }
      //space between rows
      render() {
          return (
            // Try setting `justifyContent` to `center`.
            // Try setting `flexDirection` to `row`.
            <View style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
          );
        }

        // by columns

        render() {
            return (
              // Try setting `alignItems` to 'flex-start'
              // Try setting `justifyContent` to `flex-end`.
              // Try setting `flexDirection` to `row`.
              <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
              </View>
            );
          }
}


AppRegistry.registerComponent('AwesomeProject', () => FixedDimensionsBasics);
