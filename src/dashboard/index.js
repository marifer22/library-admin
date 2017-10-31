import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

export default () => (
    <Card>
        <CardHeader title="Welcome to the administration" />
        <CardText>
            Here you can check all the books, edit any, 
            create new one or delete some.
        </CardText>
    </Card>
);