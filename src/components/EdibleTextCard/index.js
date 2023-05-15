import {Component} from 'react'
import {
  BackgroundColorContainer,
  CardContainer,
  Heading,
  Button,
  InputContainer,
  InputSearch,
  TextContent,
} from './styledComponents'

class EdibleTextCard extends Component {
  state = {isSave: false, inputVal: ''}

  updateText = event => {
    this.setState({inputVal: event.target.value})
  }

  updateSave = () => {
    this.setState(prevState => ({isSave: !prevState.isSave}))
  }

  render() {
    const {inputVal, isSave} = this.state
    return (
      <BackgroundColorContainer>
        <CardContainer>
          <Heading>Editable Text Input</Heading>
          {isSave ? (
            <InputContainer>
              <TextContent>{inputVal}</TextContent>
              <Button onClick={this.updateSave}>Edit</Button>
            </InputContainer>
          ) : (
            <InputContainer>
              <InputSearch
                type="text"
                value={inputVal}
                onChange={this.updateText}
              />
              <Button onClick={this.updateSave}>Save</Button>
            </InputContainer>
          )}
        </CardContainer>
      </BackgroundColorContainer>
    )
  }
}
export default EdibleTextCard
