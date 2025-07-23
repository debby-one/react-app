
import React from 'react';
import { Card } from 'react-bootstrap';

interface MetricCardProps {
  title: string;
  children: React.ReactNode;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, children }) => {
  return (
    <Card bg="dark" text="white" className="h-100">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {children}
      </Card.Body>
    </Card>
  );
};

export default MetricCard;
