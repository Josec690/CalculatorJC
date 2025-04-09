import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#555',
  },
  picker: {
    height: 50,
    width: 250,
    marginBottom: 20,
    backgroundColor: '#FFF',
    borderRadius: 8,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  input: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginTop: 15,
    fontSize: 16,
  },
  result: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4e9af1',
  },
});

export default styles;