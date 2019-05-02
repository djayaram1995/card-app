import React, { Component } from 'react';
import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
	CardTitle,
	CardSubtitle,
	CardText,
	CardImg,
	CardImgOverlay,
	CardLink,
	CardColumns,
	CardDeck,
	CardGroup,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
	Row,
	ListGroup,
	ListGroupItem,
	Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

//Abhishek initialize the listitemList with static data
var response = {
    "Count": 14,
    "listitem": [
        {
            "view_count": 0,
            "listitem_type": "text",
            "listitem_id": 1,
            "listitem_content": "postman_21_5_listitem_53_updated_1_0707",
            "listitem_details": "",
            "is_favourite": "N"
        },
        {
            "view_count": 0,
            "listitem_type": "image",
            "listitem_id": 2,
            "listitem_content": "postman_21_5_listitem_53_updated_1",
            "listitem_details": "https://tm374-resources.s3.amazonaws.com/media/pics_dir/Screenshot_from_2018-05-12_20-14-19_Cg15VkO.png",
            "is_favourite": "N"
        },
        {
            "view_count": 0,
            "listitem_type": "video",
            "listitem_id": 4,
            "listitem_content": "postman_21_5_listitem_53_updated_1",
            "listitem_details": "https://tm374-resources.s3.amazonaws.com/media/media_dir/Screenshot_from_2018-05-12_20-14-19_copy_wrrXHI5.mp3",
            "is_favourite": "N"
        },
        {
            "view_count": 0,
            "listitem_type": "doc",
            "listitem_id": 5,
            "listitem_content": "postman_21_5_listitem_53_updated_1",
            "listitem_details": "https://tm374-resources.s3.amazonaws.com/media/docs_dir/Screenshot_from_2018-05-13_16-24-01_copy_qOIxtLA.docx",
            "is_favourite": "Y"
        },
        {
            "view_count": 0,
            "listitem_type": "image",
            "listitem_id": 6,
            "listitem_content": "postman_21_5_listitem_53_added_2",
            "listitem_details": "https://tm374-resources.s3.amazonaws.com/media/pics_dir/Screenshot_from_2018-05-13_16-24-01.png",
            "is_favourite": "N"
        },
        {
            "view_count": 0,
            "listitem_type": "image",
            "listitem_id": 7,
            "listitem_content": "postman_21_5_listitem_53_added_2",
            "listitem_details": "https://tm374-resources.s3.amazonaws.com/media/pics_dir/Screenshot_from_2018-05-12_20-14-19.png",
            "is_favourite": "Y"
        },
        {
            "view_count": 0,
            "listitem_type": "image",
            "listitem_id": 8,
            "listitem_content": "postman_21_5_listitem_53_added_2_updated_02",
            "listitem_details": "https://tm374-resources.s3.amazonaws.com/media/pics_dir/Screenshot_from_2018-05-12_20-14-19.png",
            "is_favourite": "Y"
        },
        {
            "view_count": 0,
            "listitem_type": "image",
            "listitem_id": 11,
            "listitem_content": "Specification_list",
            "listitem_details": "https://tm374-resources.s3.amazonaws.com/media/pics_dir/Screenshot_from_2018-05-12_20-14-19.png",
            "is_favourite": "Y"
        },
        {
            "view_count": 0,
            "listitem_type": "image",
            "listitem_id": 12,
            "listitem_content": "Specification_list_02",
            "listitem_details": "https://tm374-resources.s3.amazonaws.com/media/pics_dir/Screenshot_from_2018-05-12_20-14-19_DLYZBAx.png",
            "is_favourite": "Y"
        },
        {
            "view_count": 0,
            "listitem_type": "text",
            "listitem_id": 103,
            "listitem_content": "1. use the api response to fetch the updated text and edit the array/state in browser",
            "listitem_details": "",
            "is_favourite": "N"
        },
        {
            "view_count": 0,
            "listitem_type": "text",
            "listitem_id": 104,
            "listitem_content": "1. use the api response to fetch the updated is_favourite flag and view_count, and edit the array/state in browser",
            "listitem_details": "",
            "is_favourite": "N"
        },
        {
            "view_count": 0,
            "listitem_type": "text",
            "listitem_id": 105,
            "listitem_content": "1. to make all the cards of same size",
            "listitem_details": "",
            "is_favourite": "N"
        },
        {
            "view_count": 0,
            "listitem_type": "text",
            "listitem_id": 106,
            "listitem_content": "1. Username and Email are required paramters.",
            "listitem_details": "",
            "is_favourite": "N"
        },
        {
            "view_count": 1,
            "listitem_type": "text",
            "listitem_id": 107,
            "listitem_content": "2. Django will consider email as username and same is required at the time of login. Also a new user can not use the email id that has been used by an already registered user since email is treated as user name and it should be unique.",
            "listitem_details": "",
            "is_favourite": "N"
        }
	]
}

class ListItems extends Component {
  constructor(props) {
    super(props);

    // this.toggle = this.toggle.bind(this);
    // this.toggleFade = this.toggleFade.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
			timeout: 300,
			listitemList: [],
			listitem_content_text_file_form1: '',
			listitem_content_text_form2: '',
			label_id: '',
			editRowIndex: '',
			listitem_details: '',
			docfile: null,
			modal: false,
			editModalObj: {}
    };
		this.toggle = this.toggle.bind(this);
		this.editListItem = this.editListItem.bind(this);
  }

	toggle(o) {
		if (o && o.listitem_content) {
			console.log('o - ', o)
			this.setState({
				modal: !this.state.modal,
				edit_listitem_content: o.listitem_content,
				editModalObj: o
			});
		} else {
			this.setState({
				modal: !this.state.modal,
				edit_listitem_content: '',
				editModalObj: {}
			})
		}
  }

  componentDidMount() {
        //const jwtToken = cookies.get('jwtToken');
        const jwtToken = 'abc879ghvms98699'
		if (!jwtToken) {
			this.props.history.push('/login');
		} else {
			// this.checkProps(); //Abhishek
			//Abhishek
			this.setState({
				listitemList: response.listitem,
				atLevel: response.At_Level,
				listitemCount: response.Count
			});
		}
	}



	getListItems() {
		const { label_id, sublabel_id } = this.state;
		this.setState({
			editRowIndex: ''
		})
		this.setState({
					listitemList: response.listitem,
					atLevel: response.At_Level,
					listitemCount: response.Count
				});
	}

	addListItem(formId) {
		const { label_id, sublabel_id, docfile, listitem_content_text_file_form1, listitem_content_text_form2, listitem_details } = this.state;
		var listitem_content;
		if (formId === 'text_file') {
			listitem_content = listitem_content_text_file_form1;
		} else if (formId === 'text') {
			listitem_content = listitem_content_text_form2;
		}
		// console.log('listitem_details - ', `${listitem_details}hi, how are you`);
		console.log('docfile - ', docfile);
		var listitem_type = 'text';
		if (docfile && docfile.length > 0) {
			listitem_type = 'file';
		}
		
		const { listitemList } = this.state;
				listitemList.push(response.listitem);
				this.setState({
					listitemList
				});
	}

	resetFormContent() {
		const file = document.querySelector('.file');
  	file.value = '';  // upload input type file reset to default
		this.setState({
			listitem_details: '',
			listitem_content_text_file_form1: '',
			listitem_content_text_form2: '',
			docfile: null
		});
	}
	
	editListItem() {
		const { label_id, sublabel_id, edit_listitemObj, edit_listitem_content, editModalObj } = this.state;
		
				this.setState({
					editRowIndex: '',
					edit_listitemObj: '',
					edit_listitem_content: '',
				});
				// this.getListItems();
				this.toggle();
		
	}
	
	deleteListItem(o) {
		
	}
	
  // toggle() {
  //   this.setState({ collapse: !this.state.collapse });
  // }

  // toggleFade() {
  //   this.setState((prevState) => { return { fadeIn: !prevState }});
	// }
	
	handleFileUpload(e) {
		console.log('e - ', e);
		console.log('e.target - ', e.target);
		console.log('e.target.files - ', e.target.files);
		console.log('e.target.files length - ', e.target.files.length);
		this.setState({ 
			docfile: e.target.files
		});
	}
	
	mostViewedListitems(o) {
	
	}
	
	favouriteListitems(o) {
		if (o.is_favourite === 'Y') {
			var favourite_flag = 'N'
		} else {
			var favourite_flag = 'Y'			
		}
	
	}
	
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <strong>Form with File</strong>
                {/* <small> Form</small> */}
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12">
									<Form>
                    <FormGroup>
                      <Label htmlFor="name">ListItem</Label>
											<Input 
												type="text" id="name" placeholder="Enter ListItem" 
												required autoComplete="off" autoFocus className="mb-2"
												value={this.state.listitem_content_text_file_form1}
												onChange={e =>
													// this.setState({ otptoken: e.target.value })
													this.setState({
														listitem_content_text_file_form1: e.target.value
													})
												}
											/>
											</FormGroup>

											<FormGroup>
											<Label>Files</Label>
												<Input
													type="file"
													multiple
													className="file button blue-button"
													// accept="application/pdf,image/png,image/gif,image/jpeg,image/jpg,application/msword"
													onChange={(e) => this.handleFileUpload(e)}
												/>
												Upload
											</FormGroup>
											
											{(this.state.docfile || this.state.listitem_content_text_file_form1 !== '') &&
												<Button 
													type="submit" size="sm" color="primary"
													onClick={() => this.addListItem('text_file')}
												>
													<i className="fa fa-dot-circle-o"></i> Submit
												</Button>
											}
											{(!this.state.docfile && this.state.listitem_content_text_file_form1 === '') &&
												<Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Submit</Button>
											}
										{/* </FormGroup> */}
										</Form>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <strong>Form</strong>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12">
									<Form>
                    <FormGroup>
                      <Label htmlFor="name">ListItem</Label>
											<Input 
												type="text" id="name" placeholder="Enter ListItem" 
												required autoComplete="off" autoFocus className="mb-2"
												value={this.state.listitem_content_text_form2}
												onChange={e =>
													// this.setState({ otptoken: e.target.value })
													this.setState({
														listitem_content_text_form2: e.target.value
													})
												}
											/>
											</FormGroup>

											{this.state.listitem_content_text_form2 !== '' &&
												<Button 
													type="submit" size="sm" color="primary"
													onClick={() => this.addListItem('text')}
												>
													<i className="fa fa-dot-circle-o"></i> Submit
												</Button>
											}
											{this.state.listitem_content_text_form2 === '' &&
												<Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Submit</Button>
											}
										{/* </FormGroup> */}
										</Form>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

				{this.state.listitemList && Array.isArray(this.state.listitemList) && this.state.listitemList.length > 0 &&
					<Row>
						<Col sm="12" xl="6">
							<Card>
								<CardHeader>
									<i className="fa fa-align-justify"></i><strong>List Group</strong>
								</CardHeader>
								<CardBody>
									{this.state.listitemList.map((o, i) => (
										<ListGroup key={i}>
											<ListGroupItem>
												{this.state.editRowIndex === i &&
													<Input 
														type="text" id="name" placeholder="Enter Label" 
														required autoComplete="off" autoFocus 
														value={this.state.edit_listitem_content}
														onChange={e =>
															this.setState({
																edit_listitem_content: e.target.value
															})
														}
													/>
												}
												<div className='float-right'>

													<Button 
														type="submit" size="sm" color="primary"
														onClick={() => this.favouriteListitems(o)}
													>
														Favourite
													</Button>

													<Button className='ml-2'
														type="submit" size="sm" color="primary"
														onClick={() => this.mostViewedListitems(o)}
													>
														Recently viewed
													</Button>

												{this.state.editRowIndex !== i &&
													<Button 
														type="submit" size="sm" color="primary"
														className='ml-2'
														onClick={() => 
															this.setState({
																editRowIndex: i,
																edit_listitem_content: o.listitem_content,
																edit_listitemObj: o
															})
														}
													>
														Edit
													</Button>
												}

												{this.state.editRowIndex === i &&
													<Button 
														type="submit" size="sm" color="primary"
														onClick={() => this.editListItem(o, i)}
													>
														Submit
													</Button>
												}

													<Button className='ml-2'
														type="submit" size="sm" color="primary"
														onClick={() => this.deleteListItem(o)}
													>
														Delete
													</Button>
												</div>
											</ListGroupItem>
										</ListGroup>
									))}
								</CardBody>
							</Card>
						</Col>
					</Row>
				}

				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Edit</ModalHeader>
          <ModalBody>
						<Input 
							type="text" id="name" placeholder="Enter Listitem" 
							required autoComplete="off" autoFocus 
							value={this.state.edit_listitem_content}
							onChange={e =>
								// this.setState({ otptoken: e.target.value })
								this.setState({
									edit_listitem_content: e.target.value
								})
							}
						/>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.editListItem}>Done</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>

      </div>
    );
  }
}

export default ListItems;
