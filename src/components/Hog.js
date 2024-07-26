import React, { useState } from "react";
import { Card, Image, Button } from 'semantic-ui-react';

const Hog = ({ name, image, specialty, weight, greased, medal, onHide }) => {
	const [isClicked, setIsClicked] = useState(false);

	const handleHogTileClick = () => {
		setIsClicked(!isClicked);
	};

	return (
		<Card className="pigTile" onClick={handleHogTileClick}>
			<Image src={image} wrapped ui={false} alt={name} />
			<Card.Content>
				<Card.Header>{name}</Card.Header>
				{isClicked ? <Card.Description>
					<p className="normalText">Specialty: {specialty}</p>
					<p className="normalText">Weight: {weight}</p>
					<p className="normalText">Greased: {greased ? "Yes" : "No"}</p>
					<p className="normalText">Highest medal achieved: {medal}</p>
				</Card.Description> : null}
			</Card.Content>
			<Card.Content extra>
                <Button basic color='red' onClick={onHide}>
                    Hide
                </Button>
            </Card.Content>
		</Card>
	);
};

export default Hog;
