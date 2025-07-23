
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import MetricCard from '../components/MetricCard';
import CpuUsageChart from '../components/CpuUsageChart';
import MemoryUsageChart from '../components/MemoryUsageChart';
import DiskUsageTable from '../components/DiskUsageTable';

const DashboardView: React.FC = () => {
  return (
    <div className="bg-dark text-white min-vh-100">
      <Header />
      <Container fluid>
        <Row>
          <Col md={6} className="mb-4">
            <MetricCard title="CPU Usage">
              <CpuUsageChart />
            </MetricCard>
          </Col>
          <Col md={6} className="mb-4">
            <MetricCard title="Memory Usage">
              <MemoryUsageChart />
            </MetricCard>
          </Col>
        </Row>
        <Row>
          <Col>
            <MetricCard title="Disk Usage">
              <DiskUsageTable />
            </MetricCard>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DashboardView;
