import React from 'react';
import { View, Text } from 'react-native';
import { Card, Paragraph, Button } from 'react-native-paper';

class Products extends React.Component {

    render() {
        return (
            <View>
                <Card>
                    <Card.Content>
                        <Text style={{ fontSize: 18, 
                                       fontWeight: 'bold' }}>
                            Conheça nossos Serviços
                        </Text>
                        <Text style={{ fontSize: 14 }}>
                            Selecione os serviços e faça o seu agendamento
                        </Text>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Title
                        title="Nome do Serviço"
                    />
                    
                    <Card.Content>
                        <Paragraph>Cabelo Corte.</Paragraph>
                    </Card.Content>
                    <Card.Cover source={{uri: 
                    'http://barbeariareact-001-site1.htempurl.com//images/foto01.jpg'}}/>
                    
                    <Card.Content>
                        <Paragraph>Cabelo + Barba.</Paragraph>
                    </Card.Content>
                    <Card.Cover source={{uri: 
                    'http://barbeariareact-001-site1.htempurl.com//images/foto02.jpg'}}/>

                    <Card.Content>
                        <Paragraph>Barba + Bigode.</Paragraph>
                    </Card.Content>
                    <Card.Cover source={{uri: 
                    'http://barbeariareact-001-site1.htempurl.com//images/foto03.jpg'}}/>

                    <Card.Content>
                        <Paragraph>Depilação.</Paragraph>
                    </Card.Content>
                    <Card.Cover source={{uri: 
                    'http://barbeariareact-001-site1.htempurl.com//images/foto04.jpg'}}/>

                    <Card.Content>
                        <Paragraph>Estética Facial.</Paragraph>
                    </Card.Content>
                    <Card.Cover source={{uri: 
                    'http://barbeariareact-001-site1.htempurl.com//images/foto05.jpg'}}/>
                    
                    <Card.Content>
                        <Paragraph>Sobrancelha.</Paragraph>
                    </Card.Content>
                    <Card.Cover source={{uri: 
                    'http://barbeariareact-001-site1.htempurl.com//images/foto06.jpg'}}/>

                    <Card.Content>
                        <Paragraph>Penteados.</Paragraph>
                    </Card.Content>
                    <Card.Cover source={{uri: 
                    'http://barbeariareact-001-site1.htempurl.com//images/foto07.jpg'}}/>
                    <Card.Actions>
                        <Button style={{ fontWeight: 'bold' }}>
                            Adicionar ao pedido
                        </Button>
                        <Card.Title title="R$: 0,00"/>
                    </Card.Actions>
                </Card>
            </View>
        )
    }
}

export default Products;

