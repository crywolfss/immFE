import React from 'react';
import { Box, Button, TextField, IconButton, Avatar, Typography, Badge } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';


// Komponen Header
const Header = () => {
  
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
        backgroundColor: '#f0f0f0',
        fontFamily: 'Quicksand, sans-serif' 
      }}
    >
      <TextField
        variant="outlined"
        placeholder="cari disini"
        size="small"
        InputProps={{
          endAdornment: (
            <IconButton edge="end" sx={{ bgcolor: 'blue' }}>
              <SearchIcon style={{ color: 'white' }} />
            </IconButton>
          ),
        }}
        sx={{ backgroundColor: 'white', borderRadius: '5px', marginRight: '10px', width: '50%', fontFamily: 'Quicksand, sans-serif' }} 
      />
      <Button variant="contained" sx={{ backgroundColor: 'navy', color: 'white', marginRight: '10px', fontFamily: 'Quicksand, sans-serif' }}> 
        Buat Grup Baru +
      </Button>
    </Box>
  );
};

// Komponen ChatList
const ChatList = () => {
  const chats = [
    {
      image: 'src/assets/community/loremipsum.svg',
      groupName: 'Komunitas Lorem Ipsum',
      message: 'Eh, bagi link indo dong. mau no ...',
      unreadMessages: 1
    },
    {
      image: 'src/assets/community/loremmaxy.svg',
      groupName: 'Lorem Maxy UI/UX',
      message: 'Mantapp gannn',
    },
    {
      image: 'src/assets/community/ipsummaxy.svg',
      groupName: 'Ipsum Maxy UI/UX',
      message: 'Gimana perkembangan kelas kalian?',
    },
    {
      image: 'src/assets/community/mentor1.svg',
      groupName: 'Mentor maxy UI/UX',
      message: 'okee',
    },
    {
      image: 'src/assets/community/mentor2.svg',
      groupName: 'Mentor maxy UI/UX',
      message: 'iya betul sekali',
    },
    {
      image: 'src/assets/community/mentor3.svg',
      groupName: 'Mentor maxy UI/UX',
      message: 'terimakasih',
    },
    {
      image: 'src/assets/community/mentor4.svg',
      groupName: 'Mentor maxy UI/UX',
      message: 'sipp, semangat',
    },
  ];

  return (
    <Box sx={{ width: '300px', padding: '16px', marginBottom: '16px', borderRadius: '8px', fontFamily: 'Quicksand, sans-serif' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontFamily: 'Quicksand, sans-serif' }}>
        <Button style={{ backgroundColor: '#2A64F6', width: '80px', height: '39px', color: 'white', textTransform: 'none', fontFamily: 'Quicksand, sans-serif' }}>
          Chats
        </Button>
        <Button style={{ backgroundColor: '#2A64F6', width: '83px', height: '39px', color: 'white', textTransform: 'none', fontFamily: 'Quicksand, sans-serif' }}>
          Group
        </Button>
        <Button style={{ backgroundColor: '#2A64F6', width: '85px', height: '39px', color: 'white', textTransform: 'none', fontFamily: 'Quicksand, sans-serif' }}>
          Komunitas
        </Button>
      </Box>
      {chats.map((chat, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center', p: 1, fontFamily: 'Quicksand, sans-serif', bgcolor: 'transparent' }}>
          <Avatar sx={{ width: 40, height: 40, mr: 1 }} src={chat.image} alt={chat.groupName} />
          <Box sx={{ flexGrow: 1, bgcolor: 'transparent' }}>
            <Typography variant="subtitle1" fontFamily='Quicksand, sans-serif'>{chat.groupName}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: 'Quicksand, sans-serif' }}>{chat.message}</Typography>
          </Box>
          {chat.unreadMessages > 0 && (
            <Badge color="success" badgeContent={chat.unreadMessages} sx={{ ml: 1, bgcolor: 'transparent' }}>
              <span />
            </Badge>
          )}
        </Box>
      ))}
    </Box>
  );
};

// Komponen GroupCard
const GroupCard = ({ image, groupName, members, width, height }) => {
    return (
      <Link to="/dashboard-grup" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#fff',
            marginBottom: '16px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            width: width || '100%',
            height: height || 'auto',
            overflow: 'hidden',
            padding: '16px',
            fontFamily: 'Quicksand, sans-serif',
            cursor: 'pointer' // Menambahkan tanda kursor saat kartu diklik
          }}
        >
          <Box sx={{ width: '100%', height: '172px', overflow: 'hidden', maxWidth: '100%' }}>
            <img src={image} alt={groupName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Box>
          <Box sx={{ padding: '8px 16px', width: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', gap: '8px' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar sx={{ bgcolor: 'blue', marginRight: '8px' }}>{groupName.charAt(0)}</Avatar>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '2px', fontFamily: 'Quicksand, sans-serif' }}>
                    {groupName}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" fontFamily='Quicksand, sans-serif'>
                    {members} anggota
                  </Typography>
                </Box>
              </Box>
              <Button variant="contained" sx={{ backgroundColor: '#0F1F3E', color: 'white', textTransform: 'none', padding: '4px 12px', fontSize: '0.875rem', fontFamily: 'Quicksand, sans-serif' }}>
                Gabung
              </Button>
            </Box>
          </Box>
        </Box>
      </Link>
    );
  };

// GroupList Component
const GroupList = () => {
  const groups = [
    {
      image: 'src/assets/community/grup.svg',
      groupName: 'Group Sociopreneur',
      members: '34 ribu',
      width: 829,
      height: 344
    },
    {
      image: 'src/assets/community/grupimpact.svg',
      groupName: 'Group Impact',
      members: '34 ribu',
      width: 829,
      height: 344
    },
    {
      image: 'src/assets/community/grupgrant.svg',
      groupName: 'Group Grant',
      members: '34 ribu',
      width: 829,
      height: 344
    },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px', fontFamily: 'Quicksand, sans-serif' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '16px', alignItems: 'center' }}>
        {/* Search TextField */}
        <TextField
          variant="outlined"
          placeholder="cari disini"
          size="small"
          InputProps={{
            endAdornment: (
              <IconButton edge="end" sx={{ bgcolor: '#2A64F6', borderRadius: '0', padding: '6px' }}>
                <SearchIcon style={{ color: 'white' }} />
              </IconButton>
            ),
          }}
          sx={{
            width: '70%',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#2A64F6',
              },
              '&:hover fieldset': {
                borderColor: '#2A64F6',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#2A64F6',
              },
              '& .MuiOutlinedInput-input': {
                paddingRight: '36px', 
                fontFamily: 'Quicksand, sans-serif' // Set font family here
              },
            },
            '& .MuiInputBase-root': {
              borderRadius: '4px',
            },
          }}
        />
        {/* "Tambah Grup Baru" Button */}
        <Button variant="contained" style={{ backgroundColor: '#0F1F3E', color: 'white', textTransform: 'none', fontFamily: 'Quicksand, sans-serif', marginLeft: 'auto' }}>
          Buat Grup Baru +
        </Button>
      </Box>
      {/* Group list */}
      {groups.map((group, index) => (
        <Box key={index} sx={{ marginBottom: '16px', textAlign: 'center' }}> 
          {/* GroupCard component */}
          <GroupCard
            image={group.image}
            groupName={group.groupName}
            members={group.members}
            width={group.width}
            height={group.height}
            style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'center' }} 
          />
        </Box>
      ))}
    </Box>
  );
};

// Right Sidebar Component
const RightSidebar = () => {
  const additionalGroups = [
    {
      image: 'src/assets/community/investor.svg',
      groupName: 'Community Investor',
      members: '100+ anggota'
    },
    {
      image: 'src/assets/community/sociofams.svg',
      groupName: 'Sociopreneur Fams',
      members: '100+ anggota'
    },
    {
      image: 'src/assets/community/youngimpact.svg',
      groupName: 'Young Impactmakers',
      members: '100+ anggota'
    },
    {
      image: 'src/assets/community/impacthub.svg',
      groupName: 'Impact Hub',
      members: '100+ anggota'
    },
  ];

  return (
    <Box sx={{ height: '670px', marginLeft: '16px', padding: '16px', fontFamily: 'Quicksand, sans-serif' }}>
      <ChatList />
      <Button variant="contained" sx={{ backgroundColor: '#0F1F3E', color: 'white', marginTop: '16px', width: '100%', textTransform: 'none',  }}>
        Mulai Chat Baru
      </Button>
      <Typography variant="h6" sx={{ marginTop: '20px', marginBottom: '8px', color: 'black',fontFamily: 'Quicksand, sans-serif' }}>
        Group
      </Typography>
      {/* Additional group elements */}
      <Box sx={{ mt: 2 }}>
  {additionalGroups.map((group, index) => (
    <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2, fontFamily: 'Quicksand, sans-serif' }}>
      <img
        src={group.image}
        alt="Logo Bulat"
        style={{ width: '40px', height: '40px', borderRadius: '50%' }}
      />
      <Box sx={{ ml: 2 }}>
        <Typography variant="subtitle1" fontFamily="Quicksand, sans-serif">{group.groupName}</Typography>
        <Typography variant="body2" color="textSecondary" fontFamily="Quicksand, sans-serif">{group.members}</Typography>
      </Box>
    </Box>
        ))}
        {/* Button for creating a new group */}
        <Button variant="contained" sx={{ backgroundColor: '#0F1F3E', color: 'white', width: '100%', fontFamily: 'Quicksand, sans-serif', textTransform: 'none' }}>
          Buat Grup Baru +
        </Button>
      </Box>
    </Box>
  );
};


// Main Component
const CariGrup = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: '16px', backgroundColor: '#white' }}>
      <GroupList />
      <RightSidebar />
    </Box>
  );
};

export default CariGrup;