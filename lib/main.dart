import 'package:flutter/material.dart';
import 'package:tenlo/pages/cardspage.dart';
import 'package:tenlo/pages/inicio.dart';
import 'package:tenlo/pages/lugares.dart';
import 'package:tenlo/pages/usuarios.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final tabController = new DefaultTabController(
      length: 4,
      child: new Scaffold(
        appBar: PreferredSize(
            preferredSize: Size.fromHeight(75.0),
            child: AppBar(
              // title: Text('Top navigation bar'),
              bottom:
                  new TabBar(indicatorColor: Colors.green[200], tabs: <Widget>[
                new Tab(
                  icon: Icon(Icons.home),
                  text: 'Inicio',
                ),
                new Tab(
                  icon: Icon(Icons.supervised_user_circle),
                  text: 'Usuarios',
                ),
                new Tab(
                  icon: Icon(Icons.place),
                  text: 'Lugares',
                ),
                new Tab(
                  icon: Icon(Icons.card_giftcard),
                  text: 'Pedidos',
                ),
              ]),
            )),
        body: new TabBarView(children: <Widget>[
          new HomePage(),
          new UsuariosPage(),
          new LugaresPage(),
          new CardsPage(),
        ]),
      ),
    );

    return MaterialApp(
        title: 'Aplicación de entregas a domicilio', 
        home: tabController,);
  }
}
