import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Grid
} from '@mui/material';
import axios from 'axios';

const UserCheckInStats = () => {
  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('/room-requests/user-check-in-stats');
        setUserStats(response.data);
      } catch (error) {
        console.error('Error fetching user stats:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              User Check-in Statistics
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>User Name</TableCell>
                    <TableCell>Room Name</TableCell>
                    <TableCell>Check-in Status</TableCell>
                    <TableCell>Check-in Time</TableCell>
                    <TableCell>Check-out Time</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {userStats.map((request) => (
                    <TableRow key={request._id}>
                      <TableCell>{request.user?.name || 'N/A'}</TableCell>
                      <TableCell>{request.room?.name || 'N/A'}</TableCell>
                      <TableCell>
                        <Chip 
                          label={request.isCheckedIn ? "Checked In" : "Checked Out"} 
                          color={request.isCheckedIn ? "success" : "default"}
                        />
                      </TableCell>
                      <TableCell>
                        {request.checkInTime ? new Date(request.checkInTime).toLocaleString() : 'Not checked in'}
                      </TableCell>
                      <TableCell>
                        {request.checkOutTime ? new Date(request.checkOutTime).toLocaleString() : 'Not checked out'}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default UserCheckInStats; 