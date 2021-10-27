import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "#C7BFAE",
				textAlign: "center",
				marginTop: "-50px",
                marginBottom: "30px" }}>
		MyRecipe Diary: An online recipe saving and sharing app
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
		</Column>
		<Column>
			<Heading>Features</Heading>
			<FooterLink href="#">Live Recipe Visualization</FooterLink>
			<FooterLink href="#">Easy to use interface</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="">Mail Us</FooterLink>
			<FooterLink href="">Any Query</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="https://www.linkedin.com/in/vaibhav-pathak-6a4301158/">
				<span style={{ marginLeft: "10px" }}>
				Linkedin
				</span>
            </FooterLink>
			<FooterLink href="https://github.com/vaibhavpathak999/RecipeApp">
				<span style={{ marginLeft: "10px" }}>
				GitHub
				</span>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
