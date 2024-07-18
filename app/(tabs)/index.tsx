import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Ambulancecon, DoctorIcon, HospitalIcon, LabIcon, Pharmacycon, SearchIcon } from '@/constants/Icon';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/ui/header';
import DoctorCard from '@/components/Card/DoctorCard';

const HomeScreen: React.FC = () => {
  const [activeSymptom, setActiveSymptom] = useState('Snuffle');

  const symptoms = [
    { name: 'Snuffle', emoji: '🤧' },
    { name: 'High Fever', emoji: '🤒' },
    { name: 'Headache', emoji: '🤕' },
  ];
  const doctors = [
    {
      name: 'Dr. Marcus Horizon',
      specialty: 'Cardiologist',
      rating: '4.7',
      distance: '800m',
      image: '@/assets/images/avatar.png',
    },
    {
      name: 'Dr. Marcus Horizon',
      specialty: 'Cardiologist',
      rating: '4.7',
      distance: '800m',
      image: '@/assets/images/avatar.png',
    },
    {
      name: 'Dr. Marcus Horizon',
      specialty: 'Cardiologist',
      rating: '4.7',
      distance: '800m',
      image: '@/assets/images/avatar.png',
    },
    {
      name: 'Dr. Marcus Horizon',
      specialty: 'Cardiologist',
      rating: '4.7',
      distance: '800m',
      image: '@/assets/images/avatar.png',
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={{
        paddingBottom: 100,
        paddingHorizontal: 14,
        paddingTop: 40
      }}
        showsVerticalScrollIndicator={false}
      >

        <View style={styles.searchContainer}>
          <SearchIcon />
          <TextInput
            style={styles.searchInput}
            placeholder="Search doctor, drugs, articles..."
            placeholderTextColor="#1C1C1C99"
          />
        </View>
        <View style={styles.gridContainer}>
          <TouchableOpacity style={[styles.gridItem, styles.gridItemLarge]}>
            <DoctorIcon color="#fff" />
            <Text style={[styles.gridItemTitle, { color: '#fff' }]}>Doctors</Text>
            <Text style={styles.gridItemSubtitle}>Consult Only With A Doctor You Trust</Text>
          </TouchableOpacity>
          <View style={styles.gridRow}>
            <TouchableOpacity style={[styles.gridItem1, styles.gridItemMedium]}>
              <Text style={styles.gridItemTitle}>Hospital</Text>
              <View style={{
                backgroundColor: '#387E82',
                paddingVertical: 20,
                paddingHorizontal: 5,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 15,
                height: '100%',
              }}>
                <HospitalIcon color="#387E82" width={40} height={40} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.gridItem1, styles.gridItemMedium1]}>
              <View style={{
                backgroundColor: '#fff',
                paddingVertical: 20,
                paddingHorizontal: 5,
                display: 'flex',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 15,
              }}>
                <Pharmacycon color="#387E82" width={40} height={40} />
              </View>
              <Text style={[styles.gridItemTitle, { color: '#fff' }]}>Pharmacy</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={[styles.gridItem, styles.gridItemFull, { backgroundColor: '#387E82' }]}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 14,
            paddingLeft: 10,
          }}>
            <LabIcon color="#387E82" />
            <Text style={[styles.gridItemTitle, { color: '#fff' }]}>Laboratory</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.gridItem, styles.gridItemFull]}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 14,
            paddingLeft: 10,
          }}>
            <Ambulancecon color="#387E82" />
            <Text style={styles.gridItemTitle}>Ambulance</Text>

          </View>
          <Ionicons name="chevron-forward" size={24} color="#387E82" />

        </TouchableOpacity>

        <View style={styles.symptomsContainer}>
          <Text style={styles.symptomsTitle}>Your Symptoms?</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {symptoms.map((symptom) => (
              <TouchableOpacity
                key={symptom.name}
                style={[
                  styles.symptomItem,
                  activeSymptom === symptom.name && styles.activeSymptomItem,
                ]}
                onPress={() => setActiveSymptom(symptom.name)}
              >
                <Text
                  style={[
                    styles.symptomText,
                    activeSymptom === symptom.name && styles.activeSymptomText,
                  ]}
                >
                  {symptom.emoji} {symptom.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.topDoctorContainer}>
          <Text style={styles.topDoctorTitle}>Top Doctor</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))}
        </ScrollView>

      </ScrollView>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontFamily: 'Montserrat_Bold',
    color: '#002d5c',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    fontSize: 18,
    fontFamily: 'Montserrat_Reg',
    color: '#002d5c',
    marginRight: 10,
  },
  profileImageContainer: {
    padding: 5,
    backgroundColor: '#F7F8F9',
    borderRadius: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F8F9',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    fontFamily: 'Montserrat_Reg',
    color: '#1C1C1C',
  },
  gridContainer: {
    flexDirection: 'row',
    width: '100%',
    gap: 10,
  },
  gridItem: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  gridItem1: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 20,
    flexDirection: 'row',
    gap: 10,
    paddingVertical: 10,
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  gridItemLarge: {
    backgroundColor: '#1c1c1c',
    alignItems: 'center',
  },
  gridItemMedium: {
    width: '48%',
  },
  gridItemMedium1: {
    width: '48%',
    backgroundColor: '#387E82',
  },
  gridItemFull: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  gridItemTitle: {
    fontSize: 16,
    fontFamily: 'Montserrat_SemiBold',
    color: '#387E82',
    marginBottom: 5,
  },
  gridItemSubtitle: {
    fontSize: 12,
    fontFamily: 'Montserrat_Reg',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  symptomsContainer: {
    marginBottom: 20,
  },
  symptomsTitle: {
    fontSize: 18,
    fontFamily: 'Montserrat_Bold',
    color: '#002d5c',
    marginBottom: 10,
  },
  symptomsList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  symptomItem: {
    backgroundColor: '#1C1C1C1A',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
  },
  activeSymptomItem: {
    backgroundColor: '#1C1C1C',
  },
  symptomText: {
    fontSize: 14,
    fontFamily: 'Montserrat_Reg',
    color: '#1C1C1C',
  },
  activeSymptomText: {
    color: '#fff',
  },
  topDoctorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  topDoctorTitle: {
    fontSize: 18,
    fontFamily: 'Montserrat_Bold',
    color: '#002d5c',
  },
  seeAllText: {
    fontSize: 14,
    fontFamily: 'Montserrat_Reg',
    color: '#387E82',
  },
  gridRow: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default HomeScreen;
