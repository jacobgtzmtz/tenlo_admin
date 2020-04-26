import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Aplicación de entregas a domicilio',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Te lo entregamos en tu casa'),
        ),
        body: Center(
          child: Text('Bienvenido'),
        ),
      ),
    );
  }
}