import React from 'react'
const one1=[
    {
        name: "Account"
    },
    {
        name: "Track Order"
    }, {
        name: "Support"
    }
]
const one2=[
    {
        name: "United State"
    },
    {
        name: "Usd "
    }, {
        name: "Bagla"
    }
]
const Topheader = () => {
  return (
    <>
    .import { connect } from 'react-redux'
    import component from 'componentPath'
    import {actionCreator} from 'actionCreatorPath'
    
    const mapStateToProps = (state, ownProps) => {
        return {
            prop: state.prop
        }
    }
    
    const mapDispatchToProps = (dispatch, ownProps) => {
        return {
            dispatch1: () => {
                dispatch(actionCreator)
            }
        }
    }
    
    const mergeProps = (stateProps, dispatchProps, ownProps) => {
        return {
            mergeProp: mergePropVal
        }
    }
    
    export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(component)
    </>
  )
}

export default Topheader