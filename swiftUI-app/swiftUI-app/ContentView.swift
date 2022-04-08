//
//  ContentView.swift
//  swiftUI-app
//
//  Created by LAalex.ulloa on 14/3/22.
//

import SwiftUI

struct ContentView: View {
    @State var showExplanation = true
    @State var newTodo = ""
    @State var timesPressed = 0
    
    var body: some View {
        VStack {
            Text("Lista de tareas")
                .font(.title)

            if showExplanation {
                Text("Aquí tienes tu lista de tares pendientes")
                    .padding(.vertical)
                    .onAppear {
                        // acción cuando el componente fue renderizado
                        print("Fui renderizado")
                    }
                    .onDisappear {
                        // acción cuando el componente fue removido
                        print("Fui removido")
                    }
            }

            Button("\(showExplanation ? " Ocultar" : "Mostrar") instrucciones") {
                showExplanation = !showExplanation
                timesPressed = timesPressed + 1
            }
            .padding()
            
            TextField("Ingrese la nueva tarea", text: $newTodo)
                .textFieldStyle(.roundedBorder)
                .padding()

            Text("El botón se presionó: \(timesPressed) veces")
            Spacer()
            
        }
        .onChange(of: showExplanation) { newValue in
            // acción cuando cambia la variable showExplanation
            print("nuevo valor \(newValue)")
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
