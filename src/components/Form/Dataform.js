import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


function Dataform() {
    return(
        <div className="wrapper">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-5">
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input id="exampleEmail" name="email" placeholder="with a placeholder" type="email" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleFile">File</Label>
                                <Input id="exampleFile" name="file" type="file" />
                                <FormText>
                                    This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.
                                </FormText>
                            </FormGroup>
                            <Button>
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Dataform;