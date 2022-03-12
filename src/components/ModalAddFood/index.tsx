import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface IModalAddFoodProps {
	isOpen: boolean;
	setIsOpen: () => void;
	handleAddFood: (data: IDataForm) => void;
}

interface IDataForm {
	image: string;
	name: string;
	price: string;
	description: string;	
}

export default function ModalAddFood({isOpen,setIsOpen,handleAddFood}: IModalAddFoodProps) {
	
	const handleSubmit = async (data: IDataForm) => {
		handleAddFood(data);
		setIsOpen();
	};

	const formRef = useRef(null);

	return (
		<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
			<Form ref={formRef} onSubmit={handleSubmit}>
				<h1>Novo Prato</h1>
				<Input name="image" placeholder="Cole o link aqui" />

				<Input name="name" placeholder="Ex: Moda Italiana" />
				<Input name="price" placeholder="Ex: 19.90" />

				<Input name="description" placeholder="Descrição" />
				<button type="submit" data-testid="add-food-button">
					<p className="text">Adicionar Prato</p>
					<div className="icon">
						<FiCheckSquare size={24} />
					</div>
				</button>
			</Form>
		</Modal>
	);
}