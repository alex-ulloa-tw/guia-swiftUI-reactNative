//
//  ContentView.swift
//  swiftUI-app
//
//  Created by LAalex.ulloa on 14/3/22.
//

import SwiftUI

struct ContentView: View {
    @State var showExplanation = true
    var body: some View {
        VStack {
            Text("Lista de tareas")
                .font(.title)
            
            if showExplanation {
                Text("Aquí tienes tu lista de tares pendientes")
                    .padding(.vertical)
            }
            
            Button("\(showExplanation ? " Ocultar" : "Mostrar") instrucciones") {
                showExplanation.toggle()
            }
            .padding()
            
            Spacer()
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
