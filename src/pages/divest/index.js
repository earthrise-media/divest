import React from "react"
import SEO from "../../components/seo"

import Layout from "../../components/layout"
import Button from "../../components/button"
import Title from "../../components/title"
import styles from "./styles.module.css"

const STEPS = [
  {
    key: "bank",
    header: "Where do you\ncurrently bank?",
    options: [
      { display: "Bank 1", value: 2 },
      { display: "Bank 2", value: 1 },
    ],
  },
  {
    key: "amount",
    header:
      "How much money\nwill you have in\nyour checking and\nsavings accounts\nnext year?",
    options: [
      { display: "$1,000", value: 1000 },
      { display: "$7,500", value: 7500 },
    ],
  },
]

export default () => {
  const [stepIndex, setStepIndex] = React.useState(0)

  // store user selections in state in format
  // {bank: 1, amount: 1000}
  //
  // initialize userInfo state using STEPS
  const [userInfo, setUserInfo] = React.useState(
    STEPS.reduce((acc, step) => {
      return { ...acc, [step.key]: null }
    }, {})
  )

  console.log(userInfo)

  const step = STEPS[stepIndex]

  return (
    <Layout>
      <SEO title="Steps to Divest" />
      <Title>{step.header}</Title>
      <div className={styles.optionList}>
        {step.options.map(option => {
          return (
            <Button
              key={option.value}
              onClick={() => {
                const nextUserInfo = { ...userInfo, [step.key]: option.value }

                if (stepIndex < STEPS.length - 1) {
                  // if we still have more steps to present
                  setUserInfo(nextUserInfo)
                  setStepIndex(stepIndex + 1)
                } else {
                  // we are done with the flow
                  // TODO: redirect to results
                  alert(JSON.stringify(nextUserInfo))
                }
              }}
            >
              {option.render ? option.render() : option.display}
            </Button>
          )
        })}
      </div>
    </Layout>
  )
}
